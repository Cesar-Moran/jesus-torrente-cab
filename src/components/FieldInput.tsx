import { BiErrorCircle } from "react-icons/bi";

interface FieldProps {
  name: string;
  type: string | number;
  register: any; // Ajusta el tipo según la biblioteca que estés utilizando
  className: any;
  placeholder: string;
  rows?: number;
}

const Field = ({
  placeholder,
  name,
  type,
  register,
  className,
  rows,
}: FieldProps) => {
  if (type === "textarea") {
    return (
      <textarea
        autoComplete="off"
        {...register(name)}
        className={className}
        rows={rows}
      />
    );
  } else {
    return (
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={className}
      />
    );
  }
};

export default Field;
