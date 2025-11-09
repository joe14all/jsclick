
# Portfolio Deployment Workflow

This document outlines the 3-step process to build and deploy updates to the `josephshenouda.click` portfolio website.

The commands must be run from the project's root directory.



### 1. Build the Project

First, compile the React application into static files (HTML, CSS, JS). This command creates the `dist` folder, which contains the complete production-ready website.

---
npm run build
---

### 2. Sync Files to S3

Next, synchronize the contents of the local `dist` folder with the S3 bucket.

  * `--delete`: Removes any old files from S3 that are no longer in the `dist` folder.
  * `--profile portfolio-deploy`: Ensures we use the correct, secure IAM user.



---
aws s3 sync dist/ s3://josephshenouda.click --delete --profile portfolio-deploy
---

### 3\. Invalidate CloudFront Cache

Finally, tell CloudFront to clear its cache. This forces the CDN to fetch the new files from S3, making the changes live for all users. This may take a minute or two to complete.

  * `--distribution-id E1BMCP6ZYPPTXO`: This is the unique ID for this website's CloudFront distribution.
  * `--paths "/*"`: This is a wildcard that tells CloudFront to clear *all* files.



---
aws cloudfront create-invalidation \
  --distribution-id E1BMCP6ZYPPTXO \
  --paths "/*" \
  --profile portfolio-deploy
---