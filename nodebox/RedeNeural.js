const Matrix = require('./Matrix');
class RedeNeural{
    constructor(n_in,n_hidden,n_out){
        this.n_in = n_in;
        this.n_hidden = n_hidden;
        this.n_out = n_out;

        this.bias_ih = new Matrix(this.n_hidden,1);
        this.bias_ih.rand();
        this.bias_ho = new Matrix(this.n_hidden,1);
        this.bias_ho.rand();

        this.w_ih = new Matrix(this.n_hidden,this.n_in);
        this.w_ih.rand();
        this.w_ho = new Matrix(this.n_out,this.n_hidden);
        this.w_ho.rand();
        
        
        //this.bias_ih.print();
        //this.bias_ho.print();
        //this.w_ih.print();
        //this.w_ho.print();


    }
}
module.exports = RedeNeural