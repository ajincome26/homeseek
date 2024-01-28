import { AuthResponse } from '~/types/auth.type'
import instance from '~/utils/instance'
import { path } from '~/constants/path'

const authApi = {
  registerAccount: (body: { email: string; password: string }) => instance.post<AuthResponse>(path.REGISTER, body),
  loginAccount: (body: { email: string; password: string }) => instance.post<AuthResponse>(path.LOGIN, body),
  logoutAccount: () => instance.post(path.LOGOUT)
}

export default authApi

// export const addStudent = (student: Omit<Student, 'id'>) => instance.post<Student>('students', student)

// export const getStudent = (id: number | string) => instance.get<Student>(`students/${id}`)

// export const updateStudent = (id: number | string, student: Student) => instance.put<Student>(`students/${id}`, student)

// export const deleteStudent = (id: number | string) => instance.delete<{}>(`students/${id}`)
