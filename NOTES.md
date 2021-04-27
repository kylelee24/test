# Notes

```bash
az ad sp create-for-rbac --name "sp-shared-radar-acr" --role="AcrPush" --scopes="/subscriptions/42b40479-706e-4011-bf55-bbd3b44bc307/resourceGroups/rg-shared-radar"

{
  "appId": "107e6c25-b672-4939-ba6a-8e1c45802ce0",
  "displayName": "sp-shared-radar-acr",
  "name": "http://sp-shared-radar-acr",
  "password": "N_LPAJwnD6ZrbSXkdCsGac9SgpBfnUA2Or",
  "tenant": "9cfbedc9-c7e4-46e2-be3e-d7fa81d0798a"
}
```
