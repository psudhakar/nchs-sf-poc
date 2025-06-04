Build a nice looking draw.io file based on the below : 
1. A batch job that runs periodically, indexes internal cookbooks and loads into neo4j and aws rds postgres with pg vector plug-in.
2. a chabot , that takes user input a.k.a prompt and searches the vector db and graph db for relevant context.
3. a call made to llm with the context and display result back to the user 
