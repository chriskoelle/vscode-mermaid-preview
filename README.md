# Mermaid Preview

Add Mermaid diagrams to VS Code Markdown Preview

![Mermaid Diagram in VS Code Markdown Preview](images/screenshot.png)

## Usage

````
```mermaid
graph TD;
  A-->B
  A-->C
  B-->D
  C-->D
```
````

![Mermaid Graph Preview](images/graph.png)

````
```mermaid
sequenceDiagram
  participant A
  participant B
  A->>B: request
  B--)A: response
```
````

![Mermaid Sequence Diagram Preview](images/sequence-diagram.png)

````
```mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```
````

![Mermaid Flow Diagram Preview](images/flow.png)


## Settings

| Name                 | Default   | Description          |
| -------------------- | --------- | -------------------- |
| mermaidPreview.theme | `default` | The Mermaid-JS theme |
