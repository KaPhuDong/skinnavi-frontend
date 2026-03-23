export interface Metric {
  title: string
  value: string
  change: string
  positive: boolean
  bg: string
  iconColor: string
}

export interface RevenueItem {
  name: string
  value: number
  pct: string
  color: string
}

export interface User {
  id: string
  name: string
  email: string
  status: 'Active' | 'Suspended' | 'Inactive' // Chỉ cho phép 1 trong 3 giá trị này
  subscription: 'Free' | 'Basic' | 'Pro' | 'Premium'
  lastActivity: string
  avatar?: string // Dấu ? nghĩa là không bắt buộc phải có ảnh
}

export type SkinType =
  | 'OILY'
  | 'DRY'
  | 'NORMAL'
  | 'COMBINATION'
  | 'SENSITIVE'
  | 'Normal'
  | 'Oily'
  | 'Dry'
  | 'Combination'
  | 'Sensitive'

export interface Product {
  id: string
  name: string
  usage_role: string // Khớp với JSON: "usage_role"
  display_price: string | number
  affiliate_url: string
  image_url: string
  is_active: boolean
  skin_type?: SkinType // Backend có thể chưa trả nhưng UI cần để hiển thị tag
}

export interface ProductResponse {
  page: number
  limit: number
  total: number
  totalPages: number
  items: Product[]
}

export interface ComboProduct {
  name: string
  role: string
  price: number
  url: string
  img: string
}

export interface Combo {
  id: string
  skinType: SkinType
  comboName: string
  comboPrice: number
  comboUrl: string
  comboImg: string
  products: ComboProduct[]
}
