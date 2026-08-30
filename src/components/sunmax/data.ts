export type Rate = {
  name: string;
  price: string;
  trend: "up" | "down";
};

export const panelRates: Rate[] = [
  { name: "SunMax Alpha 585W N-Type Bifacial", price: "38.50/w", trend: "up" },
  { name: "SunMax Prime 620W Bifacial", price: "43.00/w", trend: "down" },
  { name: "SunMax Prime 645W Bifacial", price: "43.00/w", trend: "down" },
  { name: "SunMax Mono 640W", price: "45.00/w", trend: "down" },
  { name: "TOPCon N-Type 620W Bifacial", price: "42.00/w", trend: "down" },
  { name: "TOPCon N-Type 710W Bifacial", price: "42.00/w", trend: "up" },
  { name: "Tiger Neo 645W Bifacial", price: "42.00/w", trend: "down" },
  { name: "ABC Bifacial 665W", price: "43.50/w", trend: "down" },
  { name: "ABC Bifacial 770W", price: "44.00/w", trend: "up" },
  { name: "HJT N-Type 740W Bifacial", price: "41.50/w", trend: "up" },
  { name: "N-Type 630W Bifacial", price: "40.25/w", trend: "up" },
  { name: "N-Type 725W Bifacial", price: "39.00/w", trend: "down" },
  { name: "Value Series 620W Bifacial", price: "37.50/w", trend: "up" },
  { name: "Value Series 585W Bifacial", price: "37.00/w", trend: "up" },
];

export const stats = [
  { value: "Since 2016", label: "Serving Pakistan" },
  { value: "420 MW", label: "Annual Supply Volume" },
  { value: "30 Years", label: "Panel Performance Warranty" },
  { value: "1,200+", label: "Systems Sold Monthly" },
  { value: "5,100 kT", label: "Carbon Emissions Avoided" },
  { value: "1,400+", label: "Sites Commissioned" },
  { value: "98%", label: "Client Retention" },
  { value: "Rs. 640M", label: "Lifetime Customer Savings" },
];

export const equipment = [
  {
    title: "Solar Panels",
    copy: "Tier-1 N-type TOPCon and bifacial modules from 545W to 770W, warehoused in Lahore for same-week dispatch.",
    points: ["N-type TOPCon & HJT", "Up to 30-year warranty", "Bulk & project pricing"],
  },
  {
    title: "Inverters",
    copy: "On-grid, hybrid and three-phase inverters from 3kW to 150kW with net-metering ready firmware and local service backup.",
    points: ["Hybrid & on-grid", "3kW - 150kW range", "Registered warranty claims"],
  },
  {
    title: "Lithium Batteries",
    copy: "LFP battery cabinets and rack modules from 5kWh upward, with BMS matching and full commissioning support.",
    points: ["LFP chemistry", "5kWh - 100kWh+", "BMS & inverter matching"],
  },
];

export const services = [
  {
    title: "Load Audit & Design",
    copy: "We size the array, inverter and storage against your actual consumption profile before quoting a single rupee.",
  },
  {
    title: "Supply & Logistics",
    copy: "Warehoused stock, verified serial numbers and insured delivery to any city in Pakistan.",
  },
  {
    title: "EPC Installation",
    copy: "Structure fabrication, DC/AC works, earthing and protections executed by in-house certified crews.",
  },
  {
    title: "Net Metering",
    copy: "Complete documentation, DISCO liaison and inspection handling until your meter is live.",
  },
  {
    title: "Monitoring",
    copy: "Remote plant monitoring with monthly yield reporting and alerting on underperforming strings.",
  },
  {
    title: "O&M Support",
    copy: "Scheduled cleaning, thermal inspection and warranty claim management for the life of the plant.",
  },
];

export const projects = [
  {
    sector: "Industrial Sector",
    title: "Textile Processing Unit, Faisalabad",
    size: "180 kW On-Grid",
  },
  {
    sector: "Commercial Sector",
    title: "Retail Complex, Sheikhupura",
    size: "127 kW On-Grid",
  },
  {
    sector: "Agricultural Sector",
    title: "Tube-Well Cluster, Bahawalpur",
    size: "75 kW Solar Pumping",
  },
  {
    sector: "Commercial Sector",
    title: "Fuel Station, Lahore Ring Road",
    size: "50 kW On-Grid",
  },
  {
    sector: "Residential Sector",
    title: "Private Residence, DHA Karachi",
    size: "20 kW Hybrid",
  },
  {
    sector: "Industrial Sector",
    title: "Cold Storage Facility, Multan",
    size: "220 kW On-Grid",
  },
];

export const testimonials = [
  {
    quote:
      "The audit was honest about what we actually needed, and the plant has been running above the projected yield since day one.",
    name: "Bilal Ahmed",
    role: "Factory Owner, Faisalabad",
  },
  {
    quote:
      "As an installer I buy my panels and inverters here because the serial numbers and warranty paperwork always check out.",
    name: "Kamran Sheikh",
    role: "Solar Installer, Lahore",
  },
  {
    quote:
      "Net metering was handled end to end. I only signed papers; the team dealt with every inspection visit.",
    name: "Sana Iqbal",
    role: "Homeowner, Islamabad",
  },
  {
    quote:
      "Battery sizing advice saved us from over-buying storage we would never have cycled. Straight answers.",
    name: "Rizwan Malik",
    role: "Operations Head, Multan",
  },
  {
    quote:
      "After-sales is where most suppliers disappear. Two service calls in a year, both closed within 48 hours.",
    name: "Hassan Raza",
    role: "Poultry Farm Owner, Okara",
  },
  {
    quote:
      "Delivery to Quetta arrived intact and on schedule, which nobody else was willing to commit to.",
    name: "Abdul Samad",
    role: "Distributor, Quetta",
  },
];

export const team = [
  { name: "Rehan Shahid", role: "Chief Executive Officer" },
  { name: "Engr. Adeel Hasan", role: "Head of Projects" },
  { name: "Engr. Mujahid Ali", role: "Head of Sales" },
  { name: "Ayesha Yaseen", role: "Marketing Manager" },
];

export const brands = [
  "TOPCon Series",
  "HJT Series",
  "Hybrid Inverters",
  "LFP Storage",
  "Mounting Systems",
  "DC Protections",
  "Smart Meters",
  "Monitoring",
];
