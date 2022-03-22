using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;
using TenantService.Core.Interfaces;

namespace TenantService.Core
{

    public class CreateTenantValidator: AbstractValidator<CreateTenantRequest>
    {
        public CreateTenantValidator()
        {
            RuleFor(request => request.Tenant).NotNull();
            RuleFor(request => request.Tenant).SetValidator(new TenantValidator());
        }
    
    }
    public class CreateTenantRequest: IRequest<CreateTenantResponse>
    {
        public TenantDto? Tenant { get; set; }
    }
    public class CreateTenantResponse: ResponseBase
    {
        public TenantDto? Tenant { get; set; }
    }
    public class CreateTenantHandler: IRequestHandler<CreateTenantRequest, CreateTenantResponse>
    {
        private readonly ITenantServiceDbContext _context;
        private readonly ILogger<CreateTenantHandler> _logger;
    
        public CreateTenantHandler(ITenantServiceDbContext context, ILogger<CreateTenantHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<CreateTenantResponse> Handle(CreateTenantRequest request, CancellationToken cancellationToken)
        {
            var tenant = new Tenant();
            
            _context.Tenants.Add(tenant);
            
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
