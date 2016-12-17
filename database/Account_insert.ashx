<%@ WebHandler Language="C#" Class="Account_insert" %>
using System.Web;
using System.Web.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.IO;
using System.Threading;


public class Account_insert : IHttpHandler {
    static string Agriculture_sql = WebConfigurationManager.ConnectionStrings["Agriculture_sql"].ConnectionString;
    SqlConnection conn = new SqlConnection(Agriculture_sql);
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        /*if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Write("別看了吧");
        }
        else*/
        {
            conn.Open();
            //MYCryptography crypto = new MYCryptography();
            //c = crypto.str_cryptography("apple",c);
            //WAITFOR DELAY '00:00:01' 等候1秒再做下一個指令
            SqlCommand cmd = new SqlCommand(@"WAITFOR DELAY '00:00:01' insert into [Account] ([Account],[Password],[Name],[Sex],[[E-mail]],[phone],[cellphone],[address]) values(@a,@b,@c,@d,@e,@f,@g,@h)");
            cmd.Connection = conn;
            cmd.Parameters.Add("@a", SqlDbType.NVarChar, 50).Value  =  context.Request.Form["add_acc"].ToString();
            cmd.Parameters.Add("@b", SqlDbType.NVarChar, 50).Value = context.Request.Form["add_pas"].ToString();
            cmd.Parameters.Add("@c", SqlDbType.NVarChar, 20).Value = context.Request.Form["add_nam"].ToString();
            cmd.Parameters.Add("@d", SqlDbType.NVarChar, 5).Value  =  context.Request.Form["add_sex"].ToString();
            cmd.Parameters.Add("@e", SqlDbType.NVarChar, 50).Value = context.Request.Form["add_ema"].ToString();
            cmd.Parameters.Add("@f", SqlDbType.NVarChar, 60).Value = context.Request.Form["add_pho"].ToString();
            cmd.Parameters.Add("@g", SqlDbType.NVarChar, 60).Value = context.Request.Form["add_cell"].ToString();
            cmd.Parameters.Add("@h", SqlDbType.NVarChar, 100).Value = context.Request.Form["add_addre"].ToString();
            cmd.ExecuteNonQuery();
            conn.Close();
            context.Response.Write("success");

        }

    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}