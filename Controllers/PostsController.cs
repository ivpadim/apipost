using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace apitest.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private const string _url = "https://jsonplaceholder.typicode.com/posts/";
        private HttpClient _client = new HttpClient();
        // GET api/posts
        [HttpGet]
        public async Task<string> Get()
        {
            var response = await _client.GetAsync(_url);
            var posts = await response.Content.ReadAsStringAsync();
            return posts;
        }

        // GET api/posts/1
        [HttpGet("{id}")]
        public async Task<string> Get(int id)
        {
            var response = await _client.GetAsync(_url + id.ToString());
            if(response.StatusCode == HttpStatusCode.OK){
                var post = await response.Content.ReadAsStringAsync();
                return post;
            }
            return "{}";
        }
    }
}
