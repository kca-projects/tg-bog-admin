export interface Machant{
  id: number;
  name: string;
  khqrImageUrl: string;
  khqrUrl: string;
  phone: string;
  email: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface Bot{
  id: number;
  name: string;
  ip: string;
  token: string;
  type: string;
  logo: string;
  marchantId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface Item{
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  botId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface Order{
  id: number;
  tableNumber: string;
  total: number;
  comment: string;
  paymentStatus: string;
  transactionImgUrl: string;
  orderDate: string;
  userId: string; //telegram
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface OrderDetail{
  id: number;
  itemId: string;
  orderId: string;
  quantity: number;
  createdAt: string;
}

export interface OrderDetail{
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}


export interface LoginRequest{
  username: string;
  password: string;
}

export interface SignUp{
  username: string;
  email: string;
  password: string;
}