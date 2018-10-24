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
        TypeWell20181021111715_dbEntities ctx = new TypeWell20181021111715_dbEntities();
        // GET: Test
        public ActionResult Index()
        {
            TEXT defaultText = (from i in ctx.TEXTs
                                where i.LENGTH1.Value == Constants.textLength_short
                                select i).FirstOrDefault();
            //TEXT defaultText = new TEXT();
            //defaultText.TextForTest = "12345";
            return View(defaultText);
        }

        protected override void Dispose(bool disposing)
        {
            ctx.Dispose();
            base.Dispose(disposing);
        }
    }
}