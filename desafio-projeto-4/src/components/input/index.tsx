import { forwardRef, type InputHTMLAttributes } from "react";

// Definimos o que o nosso Input aceita, além das propriedades padrões do HTML
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: string; // Prop opcional para mensagem de erro
}

// O forwardRef é o segredo para funcionar com React Hook Form
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-64">
        <label 
          htmlFor={props.id || props.name} 
          className="text-sm font-semibold text-gray-700"
        >
          {labelText}
        </label>
        
        <input
          ref={ref} // AQUI está a mágica: passamos a ref do RHF para o input real
          className={`
            p-2 rounded border focus:outline-none focus:ring-2
            ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}
            ${className}
          `}
          {...props} // Repassa todas as outras props (placeholder, type, onChange, etc.)
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  }
);

// É boa prática definir o DisplayName ao usar forwardRef
Input.displayName = "Input";

export default Input;