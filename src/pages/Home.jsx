import ScrollToTop from "../components/ScrollToTop.jsx";

export default function Home() {
    return ( <>
            <main>
                <section className="scroll-to-top-section">
                    <div className="main-container container-flex-end">
                        <ScrollToTop />
                    </div>
                    
                </section>

            </main>
            
        </>
    )
}