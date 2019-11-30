class Matrix{
    constructor(row,column){
        this.row=row;
        this.column=column;
        this.data= new Array(row)
            .fill(new Array(column).fill(0));
    }
    map(f){
        this.data = this.data.map((arr,i)=>{
            return arr.map((num,j)=>{
                return f(num,i,j);
            })
        });
    }
    rand(){
        this.map((num,i,j)=>{
                return Math.floor(Math.random()*10);
            });
    }
    print(){
        console.log('rows: '+this.row+' columns: '+this.column);
        console.table(this.data);
    }
    replace(arr){
        this.data=arr;
        this.row = arr.length;
        var temp = 0;
        arr.map((arr)=>{if(arr.length > temp){temp = arr.length}})
        this.column = temp;
    }
    static add(A,B){
        var matrix = new Matrix(A.row,A.column);
        matrix.map((num,i,j)=>{
                return A.data[i][j]+B.data[i][j];
            });
        return matrix;
    }
    static multi(A,B){
        var matrix = new Matrix(A.row,A.column);
        matrix.map((num,i,j)=>{
            var sum = 0;
            B.data.map((data,index)=>{
                sum += A.data[i][index]+B.data[index][j];
            });
            return sum;
            });
        return matrix;
    }
}
module.exports = Matrix;