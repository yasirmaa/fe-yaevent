export const Toast = ({ title, message }: { title: string; message: string }) => (
  <div className="p-2">
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-xs text-muted-foreground">{message}</p>
  </div>
);
