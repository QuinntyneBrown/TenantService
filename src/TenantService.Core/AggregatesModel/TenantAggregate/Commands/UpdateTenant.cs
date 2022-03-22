using FluentValidation;
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

    public class UpdateTenantValidator: AbstractValidator<UpdateTenantRequest>
    {
        public UpdateTenantValidator()
        {
            RuleFor(request => request.Tenant).NotNull();
            RuleFor(request => request.Tenant).SetValidator(new TenantValidator());
        }
    
    }
    public class UpdateTenantRequest: IRequest<UpdateTenantResponse>
    {
        public TenantDto Tenant { get; set; }
    }
    public class UpdateTenantResponse: ResponseBase
    {
        public TenantDto Tenant { get; set; }
    }
    public class UpdateTenantHandler: IRequestHandler<UpdateTenantRequest, UpdateTenantResponse>
    {
        private readonly ITenantServiceDbContext _context;
        private readonly ILogger<UpdateTenantHandler> _logger;
    
        public UpdateTenantHandler(ITenantServiceDbContext context, ILogger<UpdateTenantHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<UpdateTenantResponse> Handle(UpdateTenantRequest request, CancellationToken cancellationToken)
        {
            var tenant = await _context.Tenants.SingleAsync(x => x.TenantId == new TenantId(request.Tenant.TenantId.Value));
            
            tenant.Name = request.Tenant.Name;
            tenant.Key = request.Tenant.Key;
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                Tenant = tenant.ToDto()
            };
        }
        
    }

}
