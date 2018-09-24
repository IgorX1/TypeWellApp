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
            TEXT defaultText = (from i in ctx.TEXT
                                where i.LENGTH1.Value == Constants.textLength_short
                                select i).FirstOrDefault();

            return View(defaultText);
        }

        protected override void Dispose(bool disposing)
        {
            ctx.Dispose();
            base.Dispose(disposing);
        }
    }
}