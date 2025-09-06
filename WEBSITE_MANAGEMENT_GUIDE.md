# St Mary's Computers Website Management Guide

## Overview
This guide will help you manage and update your website content, track performance, and maintain your online presence effectively.

## 🚀 Quick Start Checklist

### Immediate Setup Tasks
1. **Google Business Profile**
   - Claim and verify your GBP listing
   - Add photos of your shop, services, and team
   - Set accurate business hours and contact information
   - Enable messaging and Q&A features

2. **Google Analytics Setup**
   - Create Google Analytics 4 account
   - Replace `G-XXXXXXXXXX` in `/components/analytics.tsx` with your actual Measurement ID
   - Set up conversion goals for phone calls and WhatsApp clicks

3. **Google Search Console**
   - Verify website ownership
   - Submit sitemap: `https://stmaryscomputers.com/sitemap.xml`
   - Monitor search performance and fix any issues

## 📱 Managing Current Stock & Products

### Updating Product Listings
**File to edit:** `/app/products/page.tsx`

#### Adding New Laptops
1. Find the `laptops` array (around line 15)
2. Add new laptop object:
```javascript
{
  brand: "Dell",
  model: "Latitude 7420",
  specs: "Intel i7 11th Gen, 16GB RAM, 512GB SSD, 14\" Display",
  condition: "Excellent",
  warranty: "6 months",
  price: "₹45,000",
  originalPrice: "₹65,000",
  image: "/images/dell-latitude-7420.jpg"
}
```

#### Updating Prices
- Simply change the `price` and `originalPrice` values
- Use format: `"₹XX,XXX"`

#### Marking Items as Sold
- Remove the item from the array or add `sold: true` property
- Consider keeping popular models for reference

### Quick Stock Updates via WhatsApp
Create template messages for common stock updates:
- "New stock arrived: [Brand Model] - ₹[Price]. Call for details!"
- "Limited stock: Only 2 units left of [Model]"
- "Price drop: [Model] now ₹[New Price] (was ₹[Old Price])"

## 📝 Content Management

### Adding Blog Posts
1. Create new folder: `/app/blog/your-post-slug/`
2. Create `page.tsx` file using existing posts as template
3. Update blog listing in `/app/blog/page.tsx`

#### Blog Post Template Structure
```typescript
export const metadata: Metadata = {
  title: "Your Post Title | St Mary's Computers",
  description: "Brief description for SEO",
  keywords: "relevant, keywords, for, seo",
};
```

### Updating Service Information
**Files to edit:**
- `/app/services/page.tsx` - Main services overview
- `/app/services/[service-name]/page.tsx` - Individual service pages

#### Common Updates:
- **Pricing:** Update the `price` field in service arrays
- **Service descriptions:** Modify the `description` text
- **FAQ sections:** Add/remove questions in the `faqs` array

### Seasonal Content Updates
- **Student season (June-August):** Highlight student laptop deals
- **Festival seasons:** Add special offers and extended hours
- **Monsoon season:** Emphasize water damage repair services
- **Winter:** Focus on heating/cooling issues

## 📊 Performance Tracking

### Google Analytics 4 Metrics to Monitor
1. **Website Traffic**
   - Total visitors per month
   - Top pages visited
   - Traffic sources (Google, direct, social)

2. **Conversion Events**
   - Phone clicks: Track which pages generate most calls
   - WhatsApp clicks: Monitor chat engagement
   - Service page views: See which services are most popular

3. **Local Performance**
   - Geographic data: Ensure traffic is from Delhi/NCR
   - Device usage: Mobile vs desktop visitors

### Google Business Profile Insights
**Weekly Review:**
- Total views and searches
- Customer actions (calls, website visits, direction requests)
- Photo views and engagement
- Review ratings and responses

**Monthly Actions:**
- Post updates about new stock or services
- Share customer testimonials (with permission)
- Update business hours for holidays
- Add new photos of services or products

### Key Performance Indicators (KPIs)
**Monthly Targets:**
- Website visitors: 500+ unique visitors
- Phone calls from website: 50+ calls
- WhatsApp inquiries: 30+ chats
- Google Business Profile views: 1000+ views
- Average review rating: 4.5+ stars

## 🔧 Technical Maintenance

### Regular Updates (Monthly)
1. **Content Freshness**
   - Update product availability
   - Add new blog post or service update
   - Review and update pricing

2. **SEO Maintenance**
   - Check Google Search Console for errors
   - Monitor keyword rankings
   - Update meta descriptions if needed

3. **Performance Checks**
   - Test website loading speed
   - Verify all contact forms work
   - Check mobile responsiveness

### Emergency Procedures
**If website is down:**
1. Check hosting service status
2. Contact web developer immediately
3. Use Google Business Profile to communicate with customers
4. Post updates on WhatsApp status

**If getting spam calls/messages:**
1. Review recent blog posts for contact information
2. Check if phone number is exposed in unexpected places
3. Consider adding contact form as primary method

## 📞 Customer Communication Templates

### WhatsApp Auto-Responses
```
Thanks for contacting St Mary's Computers! 

🕒 Business Hours: Mon-Sat 10AM-8PM
📞 Call: +91 99108 36286
📍 Location: Laxmi Nagar, New Delhi

How can we help you today?
1. Laptop/Desktop Repair
2. Printer Service
3. Buy Refurbished Laptop
4. On-site Service
5. Other

Please reply with the number or describe your issue.
```

### Review Request Template
```
Hi [Customer Name],

Thank you for choosing St Mary's Computers for your [service type]. 

If you're satisfied with our service, we'd greatly appreciate a quick Google review. It really helps our local business grow!

⭐ Leave a review: [Google Business Profile Link]

Thanks again for your trust in us!

Best regards,
George CV
St Mary's Computers
```

### Follow-up Message Template
```
Hi [Customer Name],

Hope your [laptop/computer] is working perfectly after our [service type] service.

Just a friendly reminder:
✅ 30-day warranty on all repairs
✅ Free follow-up support
✅ Call us anytime: +91 99108 36286

If you need any assistance or have friends/family needing computer services, we're here to help!

Best regards,
St Mary's Computers
```

## 🎯 Marketing & Growth Strategies

### Local SEO Optimization
**Monthly Tasks:**
1. Post on Google Business Profile (2-3 times per week)
2. Encourage satisfied customers to leave reviews
3. Update business information if anything changes
4. Share photos of recent repair work (with customer permission)

### Content Marketing
**Blog Post Ideas (Quarterly):**
- Seasonal computer maintenance tips
- New laptop model reviews
- Student buying guides
- Common repair issues and prevention
- Technology trends affecting local businesses

### Social Media Presence
**WhatsApp Status Updates (Weekly):**
- New stock arrivals
- Special offers
- Quick tech tips
- Customer testimonials
- Behind-the-scenes content

### Networking & Partnerships
**Local Outreach:**
- Partner with nearby colleges for student discounts
- Connect with local businesses for bulk service contracts
- Join local business associations
- Participate in community events

## 📋 Troubleshooting Common Issues

### Website Problems
**Slow loading:** Contact hosting provider, optimize images
**Broken links:** Check and update internal links monthly
**Mobile issues:** Test on different devices regularly

### Business Listing Issues
**Incorrect information:** Update immediately on Google Business Profile
**Negative reviews:** Respond professionally and offer to resolve offline
**Duplicate listings:** Report to Google and consolidate

### Analytics Problems
**No data showing:** Check if Analytics code is properly installed
**Unusual traffic spikes:** Verify if legitimate or spam traffic
**Low conversion rates:** Review call-to-action placement and messaging

## 📞 Support Contacts

**Website Technical Issues:**
- Developer: [Contact Information]
- Hosting Support: [Hosting Provider Details]

**Marketing & SEO:**
- Google Business Profile Support
- Google Analytics Help Center

**Emergency Contacts:**
- Backup phone number for business
- Alternative communication methods

---

## 📈 Monthly Review Template

**Date:** ___________

### Traffic & Engagement
- Website visitors: _______
- Top performing pages: _______
- Phone calls from website: _______
- WhatsApp inquiries: _______

### Business Performance
- Google Business Profile views: _______
- New reviews received: _______
- Average review rating: _______
- Direction requests: _______

### Content Updates Made
- [ ] Updated product listings
- [ ] Added new blog post
- [ ] Updated service pricing
- [ ] Posted on Google Business Profile

### Action Items for Next Month
1. _______________________
2. _______________________
3. _______________________

### Notes & Observations
_________________________________
_________________________________
_________________________________

---

*This guide should be reviewed and updated quarterly to ensure it remains current with your business needs and website functionality.*

---

# Technical Setup Guide for Developers

## 🔧 Initial Setup Requirements

### 1. Google Analytics 4 Setup
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (format: G-XXXXXXXXXX)
3. Replace placeholder in `/components/analytics.tsx`:
   ```typescript
   const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID';
   ```

### 2. Google Search Console
1. Add property at https://search.google.com/search-console
2. Verify ownership via HTML tag or DNS
3. Submit sitemap: `https://stmaryscomputers.com/sitemap.xml`

### 3. Domain & Hosting Setup
- Update all instances of `stmaryscomputers.com` with actual domain
- Ensure HTTPS is properly configured
- Set up proper redirects (www to non-www or vice versa)

### 4. Environment Variables
Create `.env.local` file:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://stmaryscomputers.com
```

## 📱 Mobile Optimization Checklist
- [x] Mobile-first responsive design
- [x] Sticky mobile CTA bar
- [x] Touch-friendly buttons (44px minimum)
- [x] Fast loading on 3G networks
- [x] Proper viewport meta tag

## 🔍 SEO Implementation Status
- [x] Structured data (LocalBusiness, Service, FAQ schemas)
- [x] Meta tags for all pages
- [x] Sitemap.xml generation
- [x] Robots.txt configuration
- [x] Internal linking structure
- [x] Local keyword optimization

## 🚀 Performance Optimization
- [x] Next.js Image optimization
- [x] Code splitting and lazy loading
- [x] Minimal JavaScript bundles
- [x] CSS optimization
- [ ] Image compression and WebP format
- [ ] CDN setup for static assets

## 📊 Analytics Events Implemented
- [x] Phone click tracking
- [x] WhatsApp click tracking
- [x] Form submission tracking
- [x] Service page view tracking
- [x] Product inquiry tracking

## 🔒 Security Considerations
- [x] HTTPS enforcement
- [x] Secure headers configuration
- [x] Input validation on forms
- [x] XSS protection
- [ ] Rate limiting for contact forms
- [ ] CAPTCHA for spam prevention

## 🎨 Design System
- [x] Consistent color scheme
- [x] Typography hierarchy
- [x] Component library (shadcn/ui)
- [x] Responsive breakpoints
- [x] Accessibility compliance (WCAG 2.1)

## 📝 Content Management
- [x] Blog system with markdown support
- [x] Dynamic product listings
- [x] Service page templates
- [x] FAQ components
- [ ] Admin panel for content updates
- [ ] Image upload system

## 🔄 Deployment & CI/CD
- [ ] Automated deployment pipeline
- [ ] Environment-specific configurations
- [ ] Database backup procedures
- [ ] Error monitoring setup
- [ ] Performance monitoring

## 🧪 Testing Checklist
- [ ] Cross-browser compatibility
- [ ] Mobile device testing
- [ ] Form functionality testing
- [ ] Analytics event verification
- [ ] Page speed optimization
- [ ] SEO audit completion

## 📞 Contact Form Integration
Current implementation uses WhatsApp redirect. Consider adding:
- [ ] Email form submission
- [ ] CRM integration
- [ ] Automated email responses
- [ ] Lead tracking system

## 🔧 Maintenance Tasks
**Weekly:**
- Monitor website uptime
- Check for broken links
- Review analytics data
- Update security patches

**Monthly:**
- Performance audit
- SEO ranking check
- Content freshness review
- Backup verification

**Quarterly:**
- Full security audit
- Technology stack updates
- User experience review
- Conversion optimization

## 📋 Launch Checklist
- [ ] Domain properly configured
- [ ] SSL certificate installed
- [ ] Google Analytics tracking verified
- [ ] Google Search Console setup
- [ ] All contact forms tested
- [ ] Mobile responsiveness verified
- [ ] Page speed optimized (>90 score)
- [ ] SEO meta tags verified
- [ ] Structured data validated
- [ ] Social media integration tested
- [ ] Error pages configured (404, 500)
- [ ] Sitemap submitted to search engines
- [ ] Local business listings updated
- [ ] Client training completed
