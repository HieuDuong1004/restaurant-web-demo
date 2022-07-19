var ck_ten = /^([A-ZÁÀÃẢẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ][a-záàãảạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+|\s)+$/;
var ck_sdt = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
function ktraform()
{   
    var ten = document.getElementById('tenkhach').value;
    var sdt = document.getElementById('sdt').value;
    var timedat = document.getElementById('chonthoigian').value;
    var dem = 0;
    if (ten == "" && sdt == "" && timedat == "")
    {
        alert("Hãy nhập họ tên, số điện thoại và thời gian đặt bàn!");
    }
    else if (ten == "" && sdt == "")
    {
        alert("Hãy nhập họ tên và số điện thoại!");
    }
    else if (ten == "" && timedat == "")
    {
        alert("Hãy nhập họ tên và chọn thời gian đặt bàn!");
    }
    else if (sdt == "" && timedat == "")
    {
        alert("Hãy nhập số điện thoại và chọn thời gian đặt bàn!");
    }
    else if (ten == "")
    {
        alert("Hãy nhập họ và tên!");
    }
    else if (sdt == "")
    {
        alert("Hãy nhập số điện thoại!");
    }
    else if (timedat == "")
    {
        alert("Hãy chọn thời gian đặt bàn!");
    }
    else
    {
        if (!ck_ten.test(ten))
        {
            alert("Hãy nhập đúng họ tên!");
        }
        else
        {
            dem++;
        }
        if (!ck_sdt.test(sdt))
        {
            alert("Hãy nhập đúng định dạng số điện thoại!");
        }
        else
        {
            dem++;
        }
    }
    if (dem==2)
    {
        alert("Bạn đã đặt bàn thành công!");
    }
}
function nhapsdt()
{
    var sdthoai = document.getElementById('sdthoai').value;
    if(ck_sdt.test(sdthoai))
    {
        alert("Bạn vừa đăng ký nhận thông tin khuyến mãi thành công! Chăn Ay chân thành cảm ơn!");
    }
    else
    {
        alert("Xin hãy nhập đúng định dạng số điện thoại!");
    }
}