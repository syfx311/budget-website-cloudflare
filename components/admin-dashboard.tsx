'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Download, LogOut, Eye, Trash2, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { OrderDetailModal } from '@/components/order-detail-modal'

interface Order {
  id: number
  package_name: string
  customer_name: string
  customer_email: string
  customer_phone: string | null
  binder_type: string | null
  colors: string | null
  inserts: string[] | null
  challenges: string | null
  special_requests: string | null
  created_at: string
  status?: string
}

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [orders, setOrders] = useState<Order[]>([])
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPackage, setFilterPackage] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  useEffect(() => {
    fetchOrders()
    // Refresh orders every 30 seconds
    const interval = setInterval(fetchOrders, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    filterOrders()
  }, [orders, searchTerm, filterPackage])

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setOrders(data || [])
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterOrders = () => {
    let filtered = orders

    if (searchTerm) {
      filtered = filtered.filter(
        order =>
          order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer_email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (filterPackage) {
      filtered = filtered.filter(order => order.package_name === filterPackage)
    }

    setFilteredOrders(filtered)
  }

  const handleDeleteOrder = async (id: number) => {
    if (!confirm('Are you sure you want to delete this order?')) return

    try {
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', id)

      if (error) throw error
      setOrders(orders.filter(o => o.id !== id))
    } catch (error) {
      console.error('Error deleting order:', error)
      alert('Failed to delete order')
    }
  }

  const handleExportCSV = () => {
    const headers = ['ID', 'Package', 'Name', 'Email', 'Phone', 'Binder Type', 'Colors', 'Inserts', 'Challenges', 'Special Requests', 'Date']
    const rows = filteredOrders.map(order => [
      order.id,
      order.package_name,
      order.customer_name,
      order.customer_email,
      order.customer_phone || '',
      order.binder_type || '',
      order.colors || '',
      Array.isArray(order.inserts) ? order.inserts.join('; ') : '',
      order.challenges || '',
      order.special_requests || '',
      new Date(order.created_at).toLocaleDateString()
    ])

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `orders-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  const uniquePackages = Array.from(new Set(orders.map(o => o.package_name)))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-card border-b border-primary/20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Orders Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              {filteredOrders.length} of {orders.length} orders
            </p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-primary/20 rounded-full"
            />
          </div>

          <select
            value={filterPackage}
            onChange={(e) => setFilterPackage(e.target.value)}
            className="px-4 py-2 rounded-full border-2 border-primary/20 bg-card text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">All Packages</option>
            {uniquePackages.map(pkg => (
              <option key={pkg} value={pkg}>{pkg}</option>
            ))}
          </select>

          {(searchTerm || filterPackage) && (
            <button
              onClick={() => {
                setSearchTerm('')
                setFilterPackage('')
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}

          <Button
            onClick={handleExportCSV}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </motion.div>

        {/* Orders Table */}
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading orders...
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No orders found
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overflow-x-auto rounded-2xl border border-primary/20 bg-card shadow-sm"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20 bg-primary/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Package</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Binder</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredOrders.map((order, index) => (
                    <motion.tr
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-foreground whitespace-nowrap">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">
                        {order.customer_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {order.customer_email}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {order.package_name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {order.binder_type || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedOrder(order)
                            setIsDetailModalOpen(true)
                          }}
                          className="p-2 hover:bg-primary/20 rounded-lg text-primary transition-colors"
                          title="View details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(order.id)}
                          className="p-2 hover:bg-destructive/20 rounded-lg text-destructive transition-colors"
                          title="Delete order"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedOrder && (
        <OrderDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          order={selectedOrder}
        />
      )}
    </div>
  )
}
