import { get, post } from '@/services/http'

export interface ExampleItem {
  id: number
  title: string
  content: string
  createdAt: string
}

// 获取示例列表
export function getExampleList(params?: { page: number; pageSize: number }) {
  return get<{ list: ExampleItem[]; total: number }>('/example/list', params)
}

// 创建示例
export function createExample(data: { title: string; content: string }) {
  return post<ExampleItem>('/example/create', data)
}