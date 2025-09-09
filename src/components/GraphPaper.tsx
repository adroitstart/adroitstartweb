const GraphPaper = ({ children }: any) => {
return (
    <section className="bg-[url('/images/graph-paper.png')] bg-cover bg-no-repeat bg-center border-hidden md:bg-contain md:bg-repeat">
        {children}
    </section>
)
}

export default GraphPaper;
