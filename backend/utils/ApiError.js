class ApiError extends Error{
    constructor( statuscode,
        message=" something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.status=statuscode
        this.data=null
        this.error=error
        this.success= false;
        this.message=message
    }
}
export default ApiError