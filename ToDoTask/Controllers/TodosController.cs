using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ToDoTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodosController : ControllerBase
    {
        private static List<Todo> Todos = new List<Todo>()
                    {
                        new Todo(){ Id = 1, Description="One", IsCompleted=false},
                        new Todo(){ Id = 2, Description="Two", IsCompleted=true},
                        new Todo(){ Id = 3, Description="Three", IsCompleted=true},
                        new Todo(){ Id = 4, Description="False", IsCompleted=false}
                    };

        private readonly ILogger<TodosController> _logger;

        public TodosController(ILogger<TodosController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Todo>> GetTodos()
        {
            _logger.Log(LogLevel.Information, "Getting Todos");
            return Todos;
        }

        [HttpPost]
        public IActionResult AddTodo([FromBody] Todo newTodo)
        {
            _logger.Log(LogLevel.Information, "Adding Todo");
            return Ok(newTodo);
        }

    }
}

