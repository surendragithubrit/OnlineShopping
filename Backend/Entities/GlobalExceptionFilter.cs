﻿using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace OnlineShoppingAppAPI.Entities
{
    public class GlobalExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            //var statusCode = context.Exception switch
            //{
            //    NotFoundException => StatusCodes.Status404NotFound,

            //    ValidationException => StatusCodes.Status400BadRequest,

            //    UnauthorizedAccessException => StatusCodes.Status401Unauthorized,

            //    _ => StatusCodes.Status500InternalServerError
            //};

            context.Result = new ObjectResult(new
            {
                error = context.Exception.Message,
                stackTrace = context.Exception.StackTrace
            })
            {
                StatusCode = 0
            };
        }
    }
}

