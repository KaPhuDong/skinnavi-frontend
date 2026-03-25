export type SkinType = 'OILY' | 'DRY' | 'NORMAL' | 'COMBINATION' | 'SENSITIVE'

export interface Product {
  id: string
  name: string
  usage_role: string
  display_price: string
  image_url: string
  affiliate_url: string
  is_active: boolean
}

export interface ApiResponse<T> {
  page: number
  limit: number
  total: number
  totalPages: number
  items: T
}

export interface ComboProductRelation {
  id: string
  step_order: number
  product: Product
}

export interface Combo {
  id: string
  skin_type_id: string
  combo_name: string
  display_price: string
  image_url: string
  affiliate_url: string
  is_active: boolean
  combo_products: ComboProductRelation[]
}
