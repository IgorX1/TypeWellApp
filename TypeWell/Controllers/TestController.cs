using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Sql;

namespace TypeWell.Controllers
{
    public class TestController : Controller
    {
        TypeWellDBEntities ctx = new TypeWellDBEntities();
        // GET: Test
        public ActionResult Index()
        {
            ViewBag.Text = ctx.TEXT.First().TextForTest;            
            return View();
        }

        protected override void Dispose(bool disposing)
        {
            ctx.Dispose();
            base.Dispose(disposing);
        }
    }
}