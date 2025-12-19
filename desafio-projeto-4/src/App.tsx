import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "./components/input"

const loginSchema = z.object({
  email: z.string()
  .min(1, "O email é obrigatório")
  .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "E-mail inválido"),

  password: z.string()
  .min(6, "A senha precisa ter pelo menos 6 caracteres")
  .max(20, "A senha é muito longa")
})

type LoginFormData = z.infer<typeof loginSchema>;

function App() {

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } // Aqui ficam os erros traduzidos
  } = useForm({
    resolver: zodResolver(loginSchema) // <--- A mágica acontece aqui
  })

  // Essa função só roda se TUDO estiver válido
  const handleLogin = (data: LoginFormData) => {
    console.log("Dados enviados com sucesso:", data)
    alert(`Bem-vindo, ${data.email}!`)
  }

  return (
    <>
      <main className='bg-blue-600 w-dvw h-dvh flex items-center justify-center'>
        <form onSubmit={handleSubmit(handleLogin)} className='bg-amber-50 w-lg p-16 rounded-2xl'>
          <h1 className="mb-8 text-2xl font-bold">Login</h1>
          <Input 
          labelText="Email:" 
          type="email" 
          placeholder="Insira seu e-mail" 
          error={errors.email?.message}
          {...register("email")}
          />
          <Input
            labelText="Senha:"
            type="password"
            placeholder="Insira sua senha"
            error={errors.password?.message}
            {...register("password")}
          />
          <button type="submit" disabled={isSubmitting} 
          className="
          bg-blue-950
          border-amber-50 
          p-4 
          rounded-2xl 
          text-white 
          mt-4 
          hover:cursor-pointer
          hover:bg-blue-500">
            {isSubmitting ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </main>
    </>
  )
}

export default App
