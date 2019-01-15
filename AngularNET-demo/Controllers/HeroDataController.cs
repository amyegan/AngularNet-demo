using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularNET_demo.Controllers
{
    [Route("api/[controller]")]
    public class HeroDataController : Controller
    {
        public Hero[] heroes = new Hero[]
        {
            new Hero {id = 11, name = "Mr. Nice"},
            new Hero {id = 12, name = "Narco" },
            new Hero {id = 13, name = "Bombasto"},
            new Hero {id = 14, name = "Celeritas"},
            new Hero {id = 15, name = "Magneta" },
            new Hero {id = 16, name = "RubberMan"},
            new Hero {id = 17, name = "Dynama" },
            new Hero {id = 18, name = "Dr IQ"},
            new Hero {id = 19, name = "Magma" },
            new Hero {id = 20, name = "Tornado" }
        };

        [HttpGet("[action]")]
        public IEnumerable<Hero> GetHeroes()
        {
            return heroes;
        }

        [HttpGet("[action]/{id}")]
        public Hero GetHero(int id)
        {
            return heroes.FirstOrDefault(x => x.id == id);
        }

        [HttpPut("[action]")]
        public HttpResponseMessage SaveHero(Hero hero)
        {
            return new HttpResponseMessage(System.Net.HttpStatusCode.Accepted);
        }

        public class Hero
        {
            public int id { get; set; }
            public string name { get; set; }
        }
    }
}
