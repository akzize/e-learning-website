


const Footer = () => {
    return (
        <div>
            <footer className="bg-body-tertiary text-center">

                {/* <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style="background-color: #3b5998;"
                            href="#!"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>


                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style="background-color: #55acee;"
                            href="#!"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style="background-color: #dd4b39;"
                            href="#!"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style="background-color: #ac2bac;"
                            href="#!"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style="background-color: #0082ca;"
                            href="#!"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a
      <a data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style="background-color: #333333;"
                            href="#!"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div> */}
                


                <div className="text-center p-3 bg-dark text-light" >
                    &copy; {new Date().getFullYear()} Copyright: 
                    <a className=" text-light text-decoration-underline" href="https://mdbootstrap.com/"> Coursaty.com</a>
                </div>

            </footer>


        </div>
    )
}

export default Footer
