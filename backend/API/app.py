from flask import Flask, jsonify, request
import pandas as pd
import io

app = Flask(__name__)

@app.route('/upload_csv', methods=['POST'])
def upload_csv():
    uploaded_files = request.files
    dfs = {}

    for filename, file in uploaded_files.items():
        ano = request.form.get(f"ano_{filename}")
        data = file.read().decode('utf-8')
        df = pd.read_csv(io.StringIO(data))
        dfs[int(ano)] = df

    mensagens_de_mudanca = []
    ids_unicos = pd.concat([df['fid'] for df in dfs.values()]).unique()

    for id_pixel in ids_unicos:
        classe_anterior = None
        ano_anterior = None
        for ano, df in sorted(dfs.items()):
            if id_pixel in df['fid'].values:
                row = df[df['fid'] == id_pixel]
                classe_atual = row['VALUE'].values[0]
                if classe_anterior is not None and classe_atual != classe_anterior:
                    mensagens_de_mudanca.append(f"O pixel {id_pixel} mudou de '{classe_anterior}' em {ano_anterior} para '{classe_atual}' em {ano}")
                classe_anterior = classe_atual
                ano_anterior = ano

    return jsonify({"mensagens_de_mudanca": mensagens_de_mudanca})

if __name__ == '__main__':
      app.run(debug=True)