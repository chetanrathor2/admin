export interface Order {
  id: number;
  created_at: number;
  user_id: number;
  charge_amount: number;
  mode_of_transfer: string;
  order_status: string;
  name: string;
}
