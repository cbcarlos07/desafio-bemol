export default interface Usuario{
    id?: number
    nome: string
    cpf: string
    cep: string
    sexo: string
    email: string
    senha?: string
    tipo_usuario_id: number,
    tipo?: string
}