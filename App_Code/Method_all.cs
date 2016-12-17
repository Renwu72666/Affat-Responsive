using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
/// <summary>
/// Class1 的摘要描述
/// </summary>
public class Method_all
{

    string Agriculture_sql = WebConfigurationManager.ConnectionStrings["Agriculture_sql"].ConnectionString;
    string server_web = WebConfigurationManager.ConnectionStrings["server_web"].ConnectionString;

    SqlConnection conn;
    DBUtil db = new DBUtil();
    MYCryptography crypto = new MYCryptography();
    public Method_all()
    {
        conn = new SqlConnection(Agriculture_sql);

    }
    public string Account_insert(string a, string b, string c, string d, string e, string f, string g, string h, string i)
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand();
        cmd.Connection = conn;
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.CommandText = "[dbo].[account_insert]";
        cmd.Parameters.Clear();
        cmd.Parameters.Add("@a", SqlDbType.NChar, 25).Value = a;
        cmd.Parameters.Add("@b", SqlDbType.NVarChar, 100).Value = crypto.str_cryptography("Agriculture", b);
        cmd.Parameters.Add("@c", SqlDbType.Char, 20).Value = c;
        cmd.Parameters.Add("@d", SqlDbType.Char, 5).Value = d;
        cmd.Parameters.Add("@e", SqlDbType.VarChar, 50).Value = e;
        cmd.Parameters.Add("@f", SqlDbType.NChar, 10).Value = f;
        cmd.Parameters.Add("@g", SqlDbType.NChar, 10).Value = g;
        cmd.Parameters.Add("@h", SqlDbType.VarChar, 1000).Value = h;
        cmd.Parameters.Add("@i", SqlDbType.NVarChar, 50).Value = i;

        SqlParameter retID = cmd.Parameters.Add("@ReturnValue", SqlDbType.Int);
        retID.Direction = ParameterDirection.ReturnValue;
        cmd.ExecuteNonQuery();

        conn.Close();
        conn.Dispose();//釋放
        if (string.Equals(retID.Value.ToString(), "0"))
        {
            return "f";
        }
        else 
        {
            return "t";
        } 
        //return retID.Value.ToString();
    }
    public string Account_Login(string a, string b)
    {
        conn.Open(); 
        SqlCommand cmd = new SqlCommand(@"select * from [Account] where Account = @a  and  Password = @b", conn);
        //cmd.Parameters.Add("@a", SqlDbType.NChar, 25).Value = "123";
        //cmd.Parameters.Add("@b", SqlDbType.NVarChar, 100).Value = "123sda";
        cmd.Parameters.Add("@a", SqlDbType.NChar, 25).Value = a;
        cmd.Parameters.Add("@b", SqlDbType.NVarChar, 100).Value = crypto.str_cryptography("Agriculture", b);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        //DataRow row = dt.Rows[0];
       
        conn.Close();
        conn.Dispose();
        if (dt.Rows.Count > 0)
        {
            return dt.Rows[0]["Account"].ToString(); ;
        }
        else{
            return "f";
        }

    }
    public string Message_insert(string a, string b, string c, string d)
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"insert into [Forum] ([Forum_name],[Forum_message],[Forum_time],[status]) values (@a,@b,@c,@d)", conn);
        cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
        cmd.Parameters.Add("@b", SqlDbType.VarChar,1000).Value = b;
        cmd.Parameters.Add("@c", SqlDbType.VarChar, 1000).Value = c;
        cmd.Parameters.Add("@d", SqlDbType.VarChar, 1000).Value = d;
        cmd.ExecuteNonQuery();
        conn.Close();
        conn.Dispose();
        return "success";
    }
    public string Message_View()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Forum]",conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Location_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Taidong_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Taitung_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Changhua_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Changhua_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented); 
        return str_json;
    }
    public string Chiayi_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Chiayi_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Hsinchu_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Hsinchu_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Hualien_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Hualien_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Ilan_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Ilan_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Kaohsiung_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Kaohsiung_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Keelung_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Keelung_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Miaoli_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Miaoli_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Nantou_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Nantou_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string NewNorthCity_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [NewNorthCity_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Pingtung_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Pingtung_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Taichung_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Taichung_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Tainan_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Tainan_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Taipei_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Taipei_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Taoyuan_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Taoyuan_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Yunlin_id()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Yunlin_landscape]", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string product_View()
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select [Product].*,[Farm].*,[InspectionAgency].* from [Product],[Farm],[InspectionAgency] where [Product].Fram_id=[Farm].Farm_id and [Product].InspectionAgency_id=[InspectionAgency].InspectionAgency_id", conn);
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        for (int index = 0; index < dt.Rows.Count; index++)
        {
            //  string picture = dt.Rows[index]["product_Picture"].ToString();
            dt.Rows[index]["Picture_location"] = server_web + dt.Rows[index]["Picture_location"];//.Replace("\r\n","<br>")
        }
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            //  string picture = dt.Rows[index]["product_Picture"].ToString();
            dt.Rows[i]["Product_detail"] = dt.Rows[i]["Product_detail"].ToString().Replace("\r\n", "<br>");
        }

        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string product_View_id(string a)
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select [Product].*,[Farm].*,[InspectionAgency].* from [Product],[Farm],[InspectionAgency] where [Product].Fram_id=[Farm].Farm_id and [Product].InspectionAgency_id=[InspectionAgency].InspectionAgency_id and [Product].Product_id=@a", conn);
        cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        for (int index = 0; index < dt.Rows.Count; index++)
        {
            //  string picture = dt.Rows[index]["product_Picture"].ToString();
            dt.Rows[index]["Picture_location"] = server_web + dt.Rows[index]["Picture_location"];//.Replace("\r\n","<br>")
        }
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string shop_list_item(string a)
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Product] where [Product].Product_id=@a", conn);
        cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string Order_insert(string a, string b, string c, string d, string e, string f, string g, string h, string i, string j)
    {
        string pay_type = "";
        string product_name = "";
        conn.Open();
        SqlCommand cmd_find = new SqlCommand(@"select [Product].Product_price, [Product].Product_name ,[Product].Product_num from [Product] where [Product].Product_id=@j", conn);
        cmd_find.Parameters.Add("@j", SqlDbType.NVarChar, 50).Value = j;
        cmd_find.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd_find);
        if (dt.Rows.Count > 0 ) {
            if (h == "pay_1"){
                pay_type = "銀行匯款";
            }else if (h == "pay_2"){
                pay_type = "支票付款";
            }else{
                pay_type = "PAYPAL";
            }
         


            product_name = dt.Rows[0]["Product_name"].ToString();
            dt.Rows[0]["Product_price"].ToString();
            SqlCommand cmd = new SqlCommand(@"insert into [Order_list] ([Order_id],[Order_Account],[Order_Count],[Order_Total_Price],[Order_Name],[Order_Phone],[Order_Address],[Order_pay],[Order_time],[Order_Prouctname]) values (@a,@b,@c,@d,@e,@f,@g,@h,@i,@j)", conn);
            cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
            cmd.Parameters.Add("@b", SqlDbType.NVarChar, 100).Value = b;
            cmd.Parameters.Add("@c", SqlDbType.NVarChar, 50).Value = c;
            cmd.Parameters.Add("@d", SqlDbType.NVarChar, 50).Value = (Int32.Parse(dt.Rows[0]["Product_price"].ToString())) * (Int32.Parse(c));
            cmd.Parameters.Add("@e", SqlDbType.VarChar, 50).Value = e;
            cmd.Parameters.Add("@f", SqlDbType.NChar, 10).Value = f;
            cmd.Parameters.Add("@g", SqlDbType.NChar, 10).Value = g;
            cmd.Parameters.Add("@h", SqlDbType.VarChar, 1000).Value = pay_type;
            cmd.Parameters.Add("@i", SqlDbType.NVarChar, 50).Value = i;
            cmd.Parameters.Add("@j", SqlDbType.NVarChar, 50).Value = product_name;
            cmd.ExecuteNonQuery();

            SqlCommand cmd_updata = new SqlCommand(@"update [Product] SET Product_num = @b  where Product_id = @a ", conn);
            cmd_updata.Parameters.Add("@a", SqlDbType.NVarChar, 50).Value = j;
            cmd_updata.Parameters.Add("@b", SqlDbType.NVarChar, 50).Value = Int32.Parse(dt.Rows[0]["Product_num"].ToString()) - (Int32.Parse(c));
            cmd_updata.ExecuteNonQuery();

            conn.Close();
            conn.Dispose();
            return "success";
        }else {
            return "f";
        }
    }
    public string contact_us_insert(string a, string b, string c, string d)
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"insert into [contact_us] ([contact_name],[contact_mail],[contact_phone],[contact_detail]) values (@a,@b,@c,@d)", conn);
        cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
        cmd.Parameters.Add("@b", SqlDbType.VarChar, 1000).Value = b;
        cmd.Parameters.Add("@c", SqlDbType.VarChar, 1000).Value = c;
        cmd.Parameters.Add("@d", SqlDbType.VarChar, 1000).Value = d;
        cmd.ExecuteNonQuery();
        conn.Close();
        conn.Dispose();
        return "success";
    }
    public string Order_list(string a)
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand(@"select * from [Order_list]  where Order_Account=@a", conn);
        cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
    public string find_description(string a)
    {
        conn.Open();//   
        SqlCommand cmd = new SqlCommand(@"select * from [Changhua_landscape],[Chiayi_landscape],[Hsinchu_landscape],[Hualien_landscape],[Ilan_landscape],[Kaohsiung_landscape],[Keelung_landscape],[Miaoli_landscape],[Nantou_landscape],[NewNorthCity_landscape],[Pingtung_landscape],[Taichung_landscape],[Tainan_landscape],[Taipei_landscape],[Taitung_landscape],[Taoyuan_landscape],[Yunlin_landscape]  where [Changhua_landscape].address=@a OR [Chiayi_landscape].address=@a OR [Hsinchu_landscape].address=@a OR [Hualien_landscape].address=@a OR [Ilan_landscape].address=@a OR [Kaohsiung_landscape].address=@a OR [Keelung_landscape].address=@a OR [Miaoli_landscape].address=@a OR [Nantou_landscape].address=@a OR [NewNorthCity_landscape].address=@a OR [Pingtung_landscape].address=@a OR [Taichung_landscape].address=@a OR [Tainan_landscape].address=@a OR [Taipei_landscape].address=@a OR [Taitung_landscape].address=@a OR [Taoyuan_landscape].address=@a OR [Yunlin_landscape].address=@a OR [landscape].coordinate_name=@a", conn);
        //SqlCommand cmd = new SqlCommand(@"select * from [landscape]  where  coordinate_name=@a", conn);
        cmd.Parameters.Add("@a", SqlDbType.NChar, 50).Value = a;
        cmd.ExecuteNonQuery();
        DataTable dt = db.cmdTable(cmd);
        conn.Close();
        conn.Dispose();
        string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
        return str_json;
    }
}

