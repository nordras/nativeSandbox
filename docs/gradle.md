## Introdução ao Gradle no Contexto do React Native

O **Gradle** é a ferramenta de automação de builds utilizada pelo **React Native** para compilar e gerenciar dependências no **Android**. Ele funciona como um sistema de build altamente configurável, permitindo a criação de diferentes variantes do aplicativo, otimização de performance e integração com bibliotecas nativas.

### 🔹 Por que o Gradle é usado no React Native?

No contexto do **React Native**, o Gradle é essencial para:

- **Gerenciar dependências nativas** (como bibliotecas que precisam de código nativo no Android).
- **Compilar e empacotar o aplicativo** (transformando código Java/Kotlin e arquivos JS em um APK/AAB).
- **Configurar variantes de build** (exemplo: `debug` e `release`).
- **Gerenciar permissões e configurações do AndroidManifest.xml**.

### 🔹 Arquivos Principais do Gradle no React Native

Dentro da pasta `android/` do seu projeto React Native, você encontrará:

1. **`android/build.gradle`**
   - Define a configuração global do projeto, incluindo a versão do Gradle e repositórios.
2. **`android/app/build.gradle`**

   - Específico para o aplicativo, contém a configuração do SDK, versão mínima e target do Android, dependências específicas e assinaturas do app.

3. **`android/gradle.properties`**

   - Contém configurações que podem otimizar a build, como habilitação do **Hermes** e configurações de cache.

4. **`android/settings.gradle`**
   - Define como os módulos do projeto são organizados.

### Sources

https://www.youtube.com/watch?v=-dtcEMLNmn0
https://gradle.org/
