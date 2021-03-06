using MediatR;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;

namespace IdentityService.Features.Core
{
    public class BaseApiController : ApiController
    {
        public BaseApiController(IMediator mediator)
        {
            _mediator = mediator;
        }

        protected Guid TenantUniqueId
        {
            get
            {
                return new Guid(Request.Headers.GetValues("Tenant").Single());
            }
        }

        public Task<TResponse> Send<TResponse>(IRequest<TResponse> request)            
        {
            if (request.GetType().IsSubclassOf(typeof(BaseRequest)))
                (request as BaseRequest).TenantUniqueId = TenantUniqueId;

            if (request.GetType().IsSubclassOf(typeof(BaseAuthenticatedRequest)))
                (request as BaseAuthenticatedRequest).ClaimsPrincipal = User as ClaimsPrincipal;

            return _mediator.Send(request);
        }

        private IMediator _mediator;
    }
}
