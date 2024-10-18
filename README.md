# CAMDN

## Executive Summary

CAMDN is a project for **HACC 2024** aimed at creating a **"Community App to Meet Digital Navigators."** This app connects Hawaii residents with low internet or digital literacy to **Community Digital Navigators (CDNs)** in partnership with the **Hawaii State Public Library System (HSPLS)**. CAMDN supports the **expansion** of the existing Digital Navigator program across the state, empowering communities with limited access to technology.

---

## Mission

Facilitate scalable, community-focused connections between residents and Digital Navigators through an accessible and easy-to-use platform.

---

## Key Features

- **Resources & Locations**: 
  - Display participating libraries and community centers.
  - Highlight walk-in sessions and neighborhood-based events.
- **Appointment Scheduling**:  
  - Schedule shared-use devices for users without personal devices.
  - Enable access to **self-paced learning** resources.
- **Support for Individuals Without Internet Access**.
- **Activity Reporting**:
  - Collect data demonstrating program impact and user demographics.
  - Identify needs across populations defined by federal guidelines.

---

## Target User Groups

- **Low-income individuals**
- **Kupuna** (seniors)
- **Incarcerated or formerly incarcerated individuals**
- **Veterans**
- **People with disabilities**
- **Individuals with limited English proficiency**
- **Rural residents**

---

## Technical Requirements

1. **Cross-platform support** (desktop and mobile) with web accessibility.
2. **Profile Creation**: Optional account creation with secure PII handling.
3. **Lightweight Design**: Optimized for slow connections and low-powered devices.
4. **Sustainable Maintenance**: Should be manageable without high-cost contractors.

---

## Design Considerations

- **User Experience for Low Literacy Users**:
  - A robust logged-out experience to display relevant resources on the landing page.
  - **Account creation** required only when scheduling reservations.
  
- **Geolocation API**:  
  - Uses browser Geolocation API to surface nearby locations, libraries, or community centers.

---

## User Roles

- **Site Admin**:
  - Full administrative control over users and resources.
  
- **Program Admin**:
  - Likely a **Hawaii state employee** managing library and resource scheduling.

- **Community Digital Navigator (CDN)**:
  - Volunteers offering assistance and advertising their availability to Program Admins.

- **Service End User**:
  - Community members with limited internet access or digital literacy.

---

## Data Model Entities

- **Facilities**:  
  Locations such as libraries or community centers created by Program Admins.
  
- **Workstations**:  
  Attached to a facility and available for reservation by Service End Users.

- **Group Events**:  
  Offline group sessions listed for logged-out users but require login to RSVP.

- **CDN Events**:  
  Events initiated by Digital Navigators, subject to Program Admin approval.

---

## Technical Approach

- **Architecture**:  
  Classic **three-layer MVC architecture** to ensure maintainability and simplicity.

- **Frontend**:
  - Built with **VueJS** for a responsive web experience.
  - CSS media queries ensure seamless mobile and desktop usability.
  - Browser **Geolocation API** for resource filtering.

- **Backend**:
  - Python-based backend using **FastAPI** for the web API.
  - **GeoPandas** for GIS functionality.
  - **Psycopg2** for PostgreSQL database communication.

- **Database**:  
  **PostgreSQL with PostGIS** for geospatial queries. **Supabase** will be used during the prototyping phase.

- **Scaling Strategy**:  
  - Stateless web services for horizontal scaling.
  - **Read replicas** may be used if necessary due to the app’s read-heavy nature.

---

## Resources & Links

- **Hawaii Public Libraries**:  
  Directory of libraries across the Hawaiian Islands.

- **GeoLocator API**:  
  API to retrieve user location (via GPS, Wi-Fi networks, cell towers, or IP address).

- **PostGIS**:  
  PostgreSQL extension for managing and querying location data.

---