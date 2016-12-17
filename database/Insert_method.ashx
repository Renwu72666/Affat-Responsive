<%@ WebHandler Language="C#" Class="Insert_method" %>

using System.Web;
using System.Web.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.IO;
using System.Threading;
public class Insert_method :  IHttpHandler , System.Web.SessionState.IRequiresSessionState {
    MYCryptography crypto = new MYCryptography();
    public void ProcessRequest (HttpContext context) {
        string a = context.Request.QueryString["a"];
        string b = context.Request.QueryString["b"];
        string c = context.Request.QueryString["c"];
        string d = context.Request.QueryString["d"];
        string e = context.Request.QueryString["e"];
        string f = context.Request.QueryString["f"];
        string g = context.Request.QueryString["g"];
        string h = context.Request.QueryString["h"];
        string i = context.Request.QueryString["i"];
        //string a_ = context.Request.Form["a_"].ToString();
        //string b_ = context.Request.Form["b_"].ToString();

        Method_all insert = new Method_all();
        //insert.Account_insert(a,b,c,d,e,f,g,h,i);  

            string result = insert.Account_insert(a, b, c, d, e, f, g, h, i);
            context.Response.Write(result);
        


    }
    //判斷字串是否為空值IsNullOrEmpty
    public bool IsReusable {
        get {
            return false;
        }
    }

}