export function Card({ children, className = "" }) {
    return <div className={`border p-5 md:h-[12rem] rounded-lg shadow-md ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  