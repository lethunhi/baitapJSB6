/* Tính tổng số chẵn từ 1 đến n. Với n nhập từ người dùng
Có bao nhiêu số chia hết cho 3 từ 0-1000
Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
Nhập vào n. Tính giai thừa 1*2*...n
 */

btnTinh.addEventListener ("click",function(e) {
    e.preventDefault();
    var num1 = +document.getElementById("inputNum1").value;
    function tinhTongSoChan () {
        var tong = 0;
        for (var i=0; i<=num1; i++) {
            if (i%2==0) {
                tong +=i;
            } 
        }
        return tong;
    }

    

    document.getElementById("txtThongBao1").innerHTML =  "Tổng các số chẵn: "+ tinhTongSoChan();


});
function tinhSoChiaHetCho3 () {
    var count = 0;

    for (var i=0; i<=1000; i++) {
        if (i%3==0) {
            count++;
        } 
    }
    return count;
}
document.getElementById("txtThongBao2").innerHTML =  "Số chia hết cho 3 từ 0-1000: "+ tinhSoChiaHetCho3();

function timSoNguyenMin () {
    var tong = 0;
    var num = 0;

    for (i = 0; i <= num; i++)
	{
		tong+=i;
		if(tong>10000){
            
			break;
		}
        num++;
        
    }
    console.log(tong)
    return num;
}
document.getElementById("txtThongBao3").innerHTML =  "Số nguyên dương nhỏ nhất mà : 1 + 2 + … + n > 10000 là: "+ timSoNguyenMin();


btnTinh2.addEventListener("click",function(e){
    e.preventDefault();

    

    function tinhTongSn (){
        var numX = +document.getElementById("inputNum2").value;
        var numN = +document.getElementById("inputNum3").value;

        var nhan= 1;
        var tong2=0;

        for (var i = 1; i<=numN;i++) {
            nhan = nhan*numX;
            tong2 +=nhan;
        } 

        return tong2;

    }

    document.getElementById("txtThongBao4").innerHTML =  "Tổng: S(n) = x + x^2 + x^3 + … + x^n: "+ tinhTongSn();

})

//Nhập vào n. Tính giai thừa 1*2*...n

btnTinh3.addEventListener("click",function(e){
    e.preventDefault();

    
    function tinhGiaiThua (){
        
        var tong3=1;
        var numNGiaiThua = +document.getElementById("inputNum4").value;

        for (var i = 1; i<=numNGiaiThua;i++) {
            tong3=tong3*i;
        } 

        return tong3;

    }

    document.getElementById("txtThongBao5").innerHTML =  "Tính giai thừa 1*2*...n: "+ tinhGiaiThua();

})




