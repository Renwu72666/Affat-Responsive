<%@ WebHandler Language="C#" Class="Message_insert" %>

using System.Web;
using System.Web.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.IO;
using System.Threading;
public class Message_insert : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            string a = context.Request.Form["a"].ToString();
            string b = context.Request.Form["b"].ToString();
            string c = context.Request.Form["c"].ToString();
            string d = context.Request.Form["d"].ToString();
            Method_all insert = new Method_all();
            if ((string.IsNullOrEmpty(a)))
            {
                string result = insert.Message_View();
                context.Response.Write(result);
            }
            else
            {
                string result = insert.Message_insert(a, b, c, d);
                context.Response.Write(result);
            }
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}