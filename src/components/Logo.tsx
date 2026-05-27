export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const { className, ...rest } = props as React.SVGProps<SVGSVGElement> & { className?: string };
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src="https://cdn.poehali.dev/projects/da7c042c-adb3-4fa6-94e4-304059fcfb5e/files/ad68fe38-858b-4bac-b7d6-ece92adc41e2.jpg"
        alt="АВТО COLOR"
        style={{ height: "36px", width: "auto", borderRadius: "4px" }}
      />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "monospace", fontSize: "16px", fontWeight: 700, color: "white", letterSpacing: "1px" }}>АВТО</span>
        <span style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 400, color: "rgba(255,255,255,0.5)", letterSpacing: "3px" }}>COLOR</span>
      </div>
    </div>
  );
};