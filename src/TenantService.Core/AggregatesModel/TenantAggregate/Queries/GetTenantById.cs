using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TenantService.Core;
using TenantService.Core.Interfaces;

namespace TenantService.Core
{

    public class GetTenantByIdRequest: IRequest<GetTenantByIdResponse>
    {
        public Guid TenantId { get; set; }
    }
    public class GetTenantByIdResponse: ResponseBase
    {
        public TenantDto Tenant { get; set; }
    }
    public class GetTenantByIdHandler: IRequestHandler<GetTenantByIdRequest, GetTenantByIdResponse>
    {
        private readonly ITenantServiceDbContext _context;
        private readonly ILogger<GetTenantByIdHandler> _logger;
    
        public GetTenantByIdHandler(ITenantServiceDbContext context, ILogger<GetTenantByIdHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetTenantByIdResponse> Handle(GetTenantByIdRequest request, CancellationToken cancellationToken)
        {
            return new () {
                Tenant = (await _context.Tenants.AsNoTracking().SingleOrDefaultAsync(x => x.TenantId == new TenantId(request.TenantId))).ToDto()
            };
        }
        
    }

}
