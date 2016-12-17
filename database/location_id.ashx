<%@ WebHandler Language="C#" Class="location_id" %>

using System;
using System.Web;
using System.Web.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.IO;
using System.Threading;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class location_id : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            string a = context.Request.Form["a"].ToString();
            Method_all method_ = new Method_all();
            if (a == "default_id")
            {
                string re_ = method_.Location_id();
                context.Response.Write(re_);
            }
            else if (a == "Taidong_id")
            {
                string re_ = method_.Taidong_id();
                context.Response.Write(re_);
            }
            else if (a == "Changhua_id")
            {
                string re_ = method_.Changhua_id();
                context.Response.Write(re_);
            }
            else if (a == "Chiayi_id")
            {
                string re_ = method_.Chiayi_id();
                context.Response.Write(re_);
            }
            else if (a == "Hsinchu_id")
            {
                string re_ = method_.Hsinchu_id();
                context.Response.Write(re_);
            }
            else if (a == "Hualien_id")
            {
                string re_ = method_.Hualien_id();
                context.Response.Write(re_);
            }
            else if (a == "Ilan_id")
            {
                string re_ = method_.Ilan_id();
                context.Response.Write(re_);
            }
            else if (a == "Kaohsiung_id")
            {
                string re_ = method_.Kaohsiung_id();
                context.Response.Write(re_);
            }
            else if (a == "Keelung_id")
            {
                string re_ = method_.Keelung_id();
                context.Response.Write(re_);
            }
            else if (a == "Miaoli_id")
            {
                string re_ = method_.Miaoli_id();
                context.Response.Write(re_);
            }
            else if (a == "Nantou_id")
            {
                string re_ = method_.Nantou_id();
                context.Response.Write(re_);
            }
            else if (a == "NewNorthCity_id")
            {
                string re_ = method_.NewNorthCity_id();
                context.Response.Write(re_);
            }
            else if (a == "Pingtung_id")
            {
                string re_ = method_.Pingtung_id();
                context.Response.Write(re_);
            }
            else if (a == "Taichung_id")
            {
                string re_ = method_.Taichung_id();
                context.Response.Write(re_);
            }
            else if (a == "Tainan_id")
            {
                string re_ = method_.Tainan_id();
                context.Response.Write(re_);
            }
            else if (a == "Taipei_id")
            {
                string re_ = method_.Taipei_id();
                context.Response.Write(re_);
            }
            else if (a == "Taoyuan_id")
            {
                string re_ = method_.Taoyuan_id();
                context.Response.Write(re_);
            }
            else if (a == "Yunlin_id")
            {
                string re_ = method_.Yunlin_id();
                context.Response.Write(re_);
            }
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}