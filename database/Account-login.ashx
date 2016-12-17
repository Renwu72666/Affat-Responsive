<%@ WebHandler Language="C#" Class="Account_login" %>

using System;
using System.Web;

public class Account_login : IHttpHandler {
    //HttpCookie cookies = new HttpCookie("validate");
    MYCryptography crypto = new MYCryptography();
    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null){
            context.Response.Redirect("../404.html");
        } else{
            string a = context.Request.Form["a"].ToString();
            string b = context.Request.Form["b"].ToString();
            Method_all insert = new Method_all();
            string result_check = insert.Account_Login(a, b);
            if (result_check != "f")
            {
                context.Response.Write(result_check);

                //cookies.Value = a;
                //context.Response.Cookies.Add(cookies);
                //context.Response.Write(context.Request.Cookies["validate"].Value.ToString());
            }
            else
            {
                context.Response.Write(result_check);
            }
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}