# Auto-Approve PR Workflow

This workflow automatically approves pull requests after they have been reviewed by at least one reviewer.

## How it works

1. **Triggers**: The workflow is triggered when:
   - A pull request review is submitted
   - A pull request is opened, synchronized, or reopened

2. **Process**:
   - Checks if the PR has at least one approved review
   - If approved reviews exist, the GitHub Actions bot will automatically approve the PR
   - Prevents duplicate approvals by checking if the bot has already approved

3. **Permissions**: The workflow requires:
   - `pull-requests: write` - to approve PRs
   - `contents: read` - to read repository contents

## Workflow file

Location: `.github/workflows/auto-approve-pr.yml`

## Usage

Once this workflow is merged into the main branch:
1. Any incoming PR will be monitored
2. When a reviewer approves the PR, the workflow will run
3. The GitHub Actions bot will add its approval automatically
4. The PR will have an additional approval from the bot

## Note

This workflow is designed to streamline the PR approval process after human review. It does not replace the need for proper code review by team members.
