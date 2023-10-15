import './header.css';

const header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className='header-row row justify-content-center'>
                    <div className='col-xl-6'>
                        <div className='text-center text-white'>
                            <h1 className='mb-5'>Generate more leads with a professional landing page!</h1>
                            <form>
                                <div className='row'>
                                    <div className="col">
                                        <input className='form-control form-control-lg' placeholder='Email address' />
                                    </div>
                                    <div className='col-auto'>
                                    <button type="button" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default header;