export default function ScrollToTop() {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div className="scroll-to-top" onClick={goToTop}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    )
}