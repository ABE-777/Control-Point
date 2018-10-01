using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace UnitTests
{
    public abstract class BaseTest
    {
        private HttpClient _client;

        public HttpClient Client
        {
            get { return _client; }
            set { _client = value; }
        }

    }
}